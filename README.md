# Project Title
MedPass – Simplifying Medical Appointment Referrals

## Overview

MedPass aims to streamline the process of family doctors booking appointments with specialists on behalf of their patients. The MVP focuses on allowing a family doctor to log in, access their dashboard, and book an appointment for a patient with a specialist.

### Problem 

The traditional process for family doctors to coordinate specialist appointments is time-consuming and inefficient. It often involves multiple phone calls, incomplete communication, and a lack of visibility into specialists' availability.

MedPass provides a centralized platform for family doctors to manage referrals and appointments efficiently, saving time and improving patient care.


### User Profile

Primary User: Family Doctors

Goal:
Log in securely, access their dashboard, and book an appointment for a patient with a specialist.

Considerations:
Protect sensitive patient data with secure authentication.
Provide an intuitive and user-friendly interface to simplify the booking process.
being able to search for closet specialist to patient.
being able to keep the booked appointments in patient history. 

### Features

## User Story:

“As a physician(family doctor), I want to log in to my dashboard and book an appointment for a patient with a specialist.”
"As a physician(family doctor), I want to log in to my dashboard and check the patients history"
"As a physician(family doctor), I want to log in to my dashboard and check the specialits availability and address"


## Key Features:

1-Secure Login:
Authenticate family doctors using JWT.

2-Patient Selection:
Search for patient by name or insurance number.

3-Specialist Search and Selection:
Search for specialists by name or closest to patient.
View available time slots and select a specialist.

4-Booking Confirmation:
Confirmation message with appointment details.
Option to add notes (e.g., reason for referral).

## Implementation

### Tech Stack

Frontend:

React(SPA)
JavaScript
Material-UI (MUI)
SASS

Backend:

REST APIs
Express
MySQL
Knex.js(Migration,seeds,controllers)
JWT (JSON Web Tokens)
Bcrypt.js
Geocoding API

Client Libraries:

React Router
Axios
@mui/x-date-pickers
Day.js

Server Libraries:

dotenv
bcryptjs for password hashing
nodemon
Knex

### APIs

**GET /api/geocoding/**

### Sitemap
- 1-Home Page(/)
- 2-login Page(/login)
- 2-Dashboard(/dashboard)
- 3-Specialists(/specialists)
- 4-Patients(/patients)
- 5-Booking(/booking)
- 6-User Profile(/profile)
- 7-Not Found Page(/*)


### Mockups

#### Login Page
![Alt Text](/src/assets/proposal/login.png)

#### Dashboard Page
![Alt Text](/src/assets/proposal/dashboard.png)

#### pecialist Selection Page
![Alt Text](/src/assets/proposal/specialists-selection.png)

#### Patient Selection Page
![Alt Text](/src/assets/proposal/patient-selection.png)

#### Booking Confirmation Page
![Alt Text](/src/assets/proposal/booking-confirmation.png)


### Data

Database Schema:
![Alt Text](/src/assets/proposal/db_diagram.png)

Users (Family Doctors) Table:
id, name, email, password, address, phone_number
Specialists Table:
id, name, email, specialty, address, phone_number, availability
Patients Table:
id, name, email, phone_number, address, insurance_number, date_of_birth
Appointments Table:
id, doctor_id, specialist_id, patient_id, appointment_time, notes

### Endpoints

**POST /api/auth/login**
Authenticates a family doctor.
params: Email, password
Response Example:
```
{ "token": "jwt_token"} 
```
**GET /api/patients**
Fetches a list of patient
Response Example:

```
[
  {
   "id": number,
   "name": string,
   "email": string,
   "phone": string,
   "insurance_number": string,
   "address": string,
   "lat": number,
   "lon": number,
   "history": [
            {
                "date": string,
                "details": string
            },
            ...
        ],
    },
    ...
]
```

**GET /api/patient/:id**
parameters: id
Response Example:
```
  {
   "id": number,
   "name": string,
   "email": string,
   "phone": string,
   "insurance_number": string,
   "address": string,
   "lat": number,
   "lon": number,
   "history": [
            {
                "date": string,
                "details": string
            },
            ...
        ],
    }
```
**POST /api/patients/:id/history**
parameters: patientId, date, details 
Response Example:

```
[
  {    
    "id": number,
    "date":string,
    "details":string
},
...
]
```

**GET /api/specialists**
Fetches a list of specialists.
```
Response Example:
[ 
  {
    "id": number,
    "name": string,
    "specialty": string,
    "email": string,
    "phone_number": string,
    "address": string,
    "first availability": string[]
  },
  ...
]
```
**GET /api/specialists/:id**
parameters: id
Response Example:
```
 {
    "id": number,
    "name": string,
    "specialty": string,
    "email": string,
    "phone_number": string,
    "address": string,
    "first availability": string[]
  }
```

**GET  /api/specialists/closest**
params: patientId
response would an array of specialists in order of distance from the patient
Response Example:
```
[
  {
        "id": number,
        "name": string,
        "specialty": string,
        "address": string,
        "lat": number,
        "lon": number,
        "phone": string,
        "firstAvailibility": string,
        "availability": string[],
        "distance": number
    },
    ...
    ]
```    

**GET  /api/geocoding/geocode**
parameters: address
Response Example:
```
{
    "latitude": "43",
    "longitude": "-79"
}
```
**GET  /api/geocoding/reverse-geocode**
parameters : lat & long
Response Example:
```
{
    "address": {
        "house_number": "123",
        "road": "Spruce Avenue",
        "city": "Richmond Hill",
        "county": "York Region",
        "state_district": "Golden Horseshoe",
        "state": "Ontario",
        "ISO3166-2-lvl4": "CA-ON",
        "postcode": "L4C 5A6",
        "country": "Canada",
        "country_code": "ca"
    }
}
```
## Roadmap

Day(1-3) Set Up Client:

Create a React project (vite or create-react-app).
Create initial routes (/login, /dashboard, /booking/specialist, /booking/patient, /booking/confirmation).
Set up basic folder structure for components, pages, and services (API handlers).
Set Up Server:

Initialize Express project.
Add routing for planned endpoints with placeholder responses.
Install required libraries (express, knex, bcrypt, etc.).
Database Setup:

Design database schema and migrations for:
Users (Family doctors)
Specialists
Patients
Appointments
Create sample data seeds for testing.


Day 3-4: Implement Login and Authentication
Login Feature:

Build the login page with form inputs for email and password.
Add form validation (e.g., required fields, email format).
Implement POST /api/login endpoint to authenticate doctors using JWT.
JWT Authentication:

Add middleware to secure protected routes on the server.
Store JWT tokens in local storage on the client.
Redirect to Dashboard:

After successful login, redirect the user to the /dashboard page.
Day 5-6 (Nov 24-25): Specialist Search and Selection
Specialist List:

Create the UI to display a searchable and filterable list of specialists.
Build the GET /api/specialists endpoint to retrieve specialists from the backend.
Calendar Integration:

Add a calendar component to show available time slots for specialists.
Allow doctors to select a specialist and a time slot.

Day 7-8: Patient Search and Selection
Patient Selection UI:
Create a page to display and search for patients.
Build the GET /api/dashboard/patients endpoint to fetch the list of patients from the backend.
Optional Notes:

Add an input field for optional notes (e.g., reason for referral).
Day 9-10 (Nov 28-29): Booking and Confirmation
Booking API:

Implement the POST /api/appointments endpoint to save the booking in the database.
Confirmation Page:

Create a confirmation page to display appointment details:
Specialist name
Patient name
Date and time
Include a "Back to Dashboard" button.

Day 11: Testing and Bug Fixes
End-to-End Testing:

Test the entire flow: login → specialist selection → patient selection → booking → confirmation.
Identify and fix bugs.

## Nice-to-haves

future of app: 

1-Role-Based Dashboards: Develop dedicated dashboards for specialists and patients to enhance user experience and accessibility.

2-Advanced Search Filters: Implement filters such as ratings to improve the discoverability of specialists.

3-Appointment History for Family Doctors: Create a detailed and user-friendly dashboard for family doctors to view the status and results of past appointments.

4-Quick Statistics for User Dashboards: Add functional statistics to display key metrics like the total number of appointments and their statuses.

