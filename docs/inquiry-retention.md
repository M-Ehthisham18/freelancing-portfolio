# Inquiry Retention and Data Handling Policy

## 1. Overview
To comply with data minimization principles and privacy commitments, StudioDev maintains a specific retention policy for personal information collected via the website contact form.

## 2. Retention Policy
- **Unconverted Inquiries**: Personal data from inquiries that do not result in a business relationship (unconverted) may be retained for a maximum of **24 months**.
- **Converted Inquiries**: Inquiries that result in a formal client relationship, signed agreement, or ongoing project are subject to separate business record retention requirements and are not subject to the 24-month unconverted inquiry deletion target.

## 3. Manual Review and Deletion Workflow
Deletion of inquiry data is performed manually to ensure that records required for legitimate business, legal, or contractual reasons are preserved.

### Step 1: Identification
Identify records that have reached the 24-month threshold. 
**Illustrative MongoDB Query (Read-Only):**
```javascript
// Find inquiries older than 24 months
db.inquiries.find({
  receivedAt: { 
    $lt: new Date(new Date().setFullYear(new Date().getFullYear() - 2)).toISOString() 
  }
})
```

### Step 2: Review
For each identified record, determine if the inquiry:
1. Converted into a client relationship.
2. Is part of an ongoing discussion or project.
3. Is required for legal or contractual evidence.

If any of the above are true, the record is marked as "Converted/Retained" and excluded from deletion.

### Step 3: Deletion
Records that are no longer required and have not converted are deleted.
**Illustrative MongoDB Query (Deletion):**
```javascript
// Delete a specific record after manual verification
db.inquiries.deleteOne({ _id: ObjectId("...") })
```

### Step 4: Verification
Confirm that the targeted records have been removed and that no active client data was accidentally deleted.

## 4. Operational Constraints
- **No Automated Deletion**: There is no automatic TTL (Time-To-Live) index on the `inquiries` collection. Deletion must be a conscious manual act.
- **Data Minimization**: No new personal data fields are to be added to the inquiry schema without a documented business necessity and privacy review.
- **Verification**: Before any bulk deletion (if ever performed), a full export/backup of the collection is required.
