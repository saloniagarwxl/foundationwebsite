# 👩💻 YUVIKA — Database Designer

**Goal:** Design and create Mongoose schemas for the following 3 collections.

### Schema 1: Admin
Fields:
- `username` — String, required
- `password` — String, required
- `role` — String, required
- `createdAt` — Date, default: Date.now

### Schema 2: Mentor
Fields:
- `name` — String, required
- `email` — String, required, unique
- `phone` — String
- `status` — String (e.g. active/inactive)
- `beneficiaryCount` — Number, default: 0
- `createdAt` — Date, default: Date.now

### Schema 3: Beneficiary
Fields:
- `fullName` — String, required
- `state` — String
- `mentorId` — ObjectId, ref: 'Mentor'
- `photo` — String (URL or file path)
- `status` — String
- `createdAt` — Date, default: Date.now

**Deliverables:**
- Mongoose schema files for Admin, Mentor, and Beneficiary
- A simple ER diagram description showing Mentor → Beneficiary (one-to-many relationship via `mentorId`)
