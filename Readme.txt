HospitalApi
------------------------->
Description :
This is an Api for doctors of hospitals which has been allocated by the govt for testing and quarantine and well being of COVID-19 patients .

Tech Stack :
NodeJs & MongoDB


[ Note* This API is also Hosted Online, if you want to call the API from the hosted site then you have to follow the similiar steps, only the chnages you need to do is Replace " http://localhost:8000/ " with the link of the hosted site. (Hosted site will be shared bellow) ]

Hosted Link:-
Github Link:-


____________________________________________________________________________
To check the API calls i am using Postman. So follow the steps:-

Welcome Page = [ (GET) http://localhost:8000 ]


DoctorRegister = [ (POST) http://localhost:8000/doctor/register ]
raw(json) -
{
    "name": "Ritu",
    "email": "ritu@gmail.com",
    "password": "admin"
}


Doctor Login = [ (GET) http://localhost:8000/doctor/login ]
raw(json) -
{
    "email": "ritu@gmail.com",
    "password": "admin"
}


Register Patients = [ (POST) http://localhost:8000/patients/registers ]
raw(json) -
{
    "name": "tanmoy",
    "email": "tanmoy@gmail.com",
    "phone": "1234567890",
    "address": "tripura"
}
{Note*} You will get a Patient ID after registration, use this ID to Update the patient status


Create Report of patients = [ (POST) http://localhost:8000/patients/{Patient ID}/create_report ]
raw(json) -
{
    "createdBy": "Ritu",
    "patientId": "{Type the Patient ID you got after Registration}",
    "status": "Negative"
}



Get all the report of patients = [ (GET) http://localhost:8000/patients/{Patient ID}/all_report ]



Get report on status = [ (GET) http://localhost:8000/patients/Negative ]
Here we can get the data based on the status where status can be anyone of the following :
1.Negative
2.Positive-Admit
3.Symptoms-Quratine
4.Travelled-Qurantine
____________________________________________________________________________
