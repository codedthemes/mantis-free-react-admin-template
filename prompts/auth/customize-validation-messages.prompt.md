<!-- DESCRIPTION: Customize Form Validation Messages: Allow users to easily change validation error messages for Login and Register forms by centralizing all Yup validation schema messages in a configurable file. -->

<!-- AGENT: Claude Opus 4.5 -->

## Requirements

### 1. Create Centralized Validation Messages File

Create a new file at `src/utils/validationMessages.js` that contains all validation messages as constants/config object, making them easy to find and modify.

### 2. Validation Rules & Messages

---

#### **First Name & Last Name Validation:**

| Rule                                          | Message                                            |
| --------------------------------------------- | -------------------------------------------------- |
| Must not be empty                             | "First Name is required" / "Last Name is required" |
| Minimum 2 characters                          | "Must be at least 2 characters"                    |
| Numbers are not allowed                       | "Numbers are not allowed"                          |
| Special characters not allowed (@ # $ % etc.) | "Special characters are not allowed"               |
| No multiple spaces between words              | "Multiple spaces are not allowed"                  |

---

#### **Email Validation:**

| Rule                                                                    | Message                                 |
| ----------------------------------------------------------------------- | --------------------------------------- |
| Must not be empty                                                       | "Email is required"                     |
| No space at beginning or end                                            | "Email cannot start or end with spaces" |
| No spaces anywhere in email                                             | "Spaces are not allowed in email"       |
| Must contain @                                                          | "Email must contain @"                  |
| Must contain domain (.com, .in, .net)                                   | "Email must have a valid domain"        |
| Only one @ allowed                                                      | "Email can only contain one @"          |
| Username allows: letters, numbers, dot (.), underscore (\_), hyphen (-) | "Invalid characters in email username"  |
| Minimum length 5 characters                                             | "Email must be at least 5 characters"   |

---

#### **Password Validation:**

| Rule                                            | Message                                                |
| ----------------------------------------------- | ------------------------------------------------------ |
| Must not be empty                               | "Password is required"                                 |
| Minimum 8 characters                            | "Password must be at least 8 characters"               |
| At least 1 Capital letter (A-Z)                 | "Password must contain at least one uppercase letter"  |
| At least 1 Small letter (a-z)                   | "Password must contain at least one lowercase letter"  |
| At least 1 Number (0-9)                         | "Password must contain at least one number"            |
| At least 1 Special character (@ # $ % & ! etc.) | "Password must contain at least one special character" |
| Spaces are not allowed                          | "Password cannot contain spaces"                       |

---
