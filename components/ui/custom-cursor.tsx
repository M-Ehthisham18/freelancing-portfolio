'use client';

import React, { useEffect, useRef, useCallback } from 'react';

export function CustomCursor() {
  const cursorCircleRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const prevMousePos = useRef({ x: 0, y: 0 });
  const circlePos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);
  const isMagnetic = useRef(false);
  const magneticTarget = useRef<{ x: number; y: number; label: string } | null>(null);
  const rafId = useRef<number>(0);
  const sizePhase = useRef(0);
  const lastTime = useRef(0);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
  const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    prevMousePos.current = { ...mousePos.current };
    mousePos.current = { x: e.clientX, y: e.clientY };

    // Check for magnetic elements nearby
    const magneticElements = document.querySelectorAll('[data-magnetic]');
    let foundMagnetic = false;

    for (let i = 0; i < magneticElements.length; i++) {
      const el = magneticElements[i] as HTMLElement;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);

      if (dist < 120) {
        magneticTarget.current = {
          x: centerX,
          y: centerY,
          label: el.getAttribute('data-magnetic') || '',
        };
        isMagnetic.current = true;
        foundMagnetic = true;
        break;
      }
    }

    if (!foundMagnetic) {
      magneticTarget.current = null;
      isMagnetic.current = false;
    }
  }, []);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isInteractive =
      target.closest('a') ||
      target.closest('button') ||
      target.closest('[data-magnetic]') ||
      target.closest('[role="button"]');

    if (isInteractive) {
      isHovering.current = true;
    }
  }, []);

  const handleMouseOut = useCallback(() => {
    isHovering.current = false;
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    const animate = (time: number) => {
      const circle = cursorCircleRef.current;
      const label = cursorLabelRef.current;

      if (!circle) {
        rafId.current = requestAnimationFrame(animate);
        return;
      }

      const dt = lastTime.current ? (time - lastTime.current) / 16.67 : 1;
      lastTime.current = time;

      // Calculate velocity
      velocity.current.x = mousePos.current.x - prevMousePos.current.x;
      velocity.current.y = mousePos.current.y - prevMousePos.current.y;

      const speed = Math.hypot(velocity.current.x, velocity.current.y);
      const normalizedSpeed = clamp(speed / 30, 0, 1);

      // Direction angle (radians)
      const angle = Math.atan2(velocity.current.y, velocity.current.x);

      // Magnetic pull
      let targetX = mousePos.current.x;
      let targetY = mousePos.current.y;
      let easeFactor = 0.06;

      if (isMagnetic.current && magneticTarget.current) {
        targetX = magneticTarget.current.x;
        targetY = magneticTarget.current.y;
        easeFactor = 0.12;
      }

      // Smooth position follow
      circlePos.current.x = lerp(circlePos.current.x, targetX, easeFactor * dt);
      circlePos.current.y = lerp(circlePos.current.y, targetY, easeFactor * dt);

      // Size pulsation (slow organic breathing when idle)
      sizePhase.current += 0.015 * dt;
      const breathScale = 1 + Math.sin(sizePhase.current) * 0.04;

      // Directional stretch based on speed
      // When moving: stretch in direction of movement, compress perpendicular
      // When still: return to circle
      const stretchAmount = normalizedSpeed * 0.35; // max 35% stretch
      const compressAmount = normalizedSpeed * 0.15; // max 15% compress

      const scaleX = (1 + stretchAmount) * breathScale;
      const scaleY = (1 - compressAmount) * breathScale;

      // Dynamic size: base 48px, grows on hover to 80px
      const baseSize = isHovering.current ? 80 : 48;
      const dynamicSize = lerp(
        parseFloat(circle.style.width) || baseSize,
        baseSize,
        0.08 * dt
      );

      // Circle ALWAYS stays at z-index 9998 — never drops
      // The hovered card rises ABOVE the circle (via CSS :hover z-index)

      // Apply transforms
      circle.style.transform = `translate(${circlePos.current.x}px, ${circlePos.current.y}px) translate(-50%, -50%) rotate(${angle}rad) scale(${scaleX}, ${scaleY})`;
      circle.style.width = `${dynamicSize}px`;
      circle.style.height = `${dynamicSize}px`;

      // Always fully visible — never fade
      circle.style.opacity = '1';

      // Label
      if (label) {
        if (isMagnetic.current && magneticTarget.current?.label) {
          label.textContent = magneticTarget.current.label;
          label.style.opacity = '1';
          label.style.transform = `translate(${circlePos.current.x}px, ${circlePos.current.y}px) translate(-50%, -50%)`;
        } else {
          label.style.opacity = '0';
        }
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [handleMouseMove, handleMouseOver, handleMouseOut]);

  return (
    <>
      {/* Organic cursor circle — fills behind cards, stretches with movement */}
      <div
        ref={cursorCircleRef}
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: 'rgba(128, 131, 255, 0.12)',
          border: '1.5px solid rgba(128, 131, 255, 0.25)',
          boxShadow: '0 0 20px rgba(128, 131, 255, 0.08)',
          transform: 'translate(-50%, -50%)',
          willChange: 'transform, width, height',
          zIndex: 9998,
        }}
      />

      {/* Label — shows on magnetic hover */}
      <div
        ref={cursorLabelRef}
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          opacity: 0,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform, opacity',
          transition: 'opacity 0.2s ease',
          zIndex: 9997,
        }}
      >
        <span
          className="px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wider uppercase whitespace-nowrap"
          style={{
            background: 'rgba(128, 131, 255, 0.9)',
            color: '#0b1326',
            fontFamily: 'var(--font-jetbrains-mono), monospace',
          }}
        />
      </div>
    </>
  );
}
