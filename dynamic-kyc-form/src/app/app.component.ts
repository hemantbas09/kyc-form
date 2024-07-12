import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-kyc-form';

  fields: any[] = [
    {
      type: 'text',
      label: 'Full Name',
      name: 'fullName',
      value: '',
      required: true
    },
    {
      type: 'date',
      label: 'Date of Birth',
      name: 'dateOfBirth',
      value: '',
      required: true
    },
    {
      type: 'text',
      label: 'Place of Birth',
      name: 'placeOfBirth',
      value: '',
      required: true
    },
    {
      type: 'select',
      label: 'Gender',
      name: 'gender',
      options: ['Male', 'Female', 'Other'],
      value: '',
      required: true
    },
    {
      type: 'text',
      label: 'Nationality',
      name: 'nationality',
      value: '',
      required: true
    },
    {
      type: 'text',
      label: 'Father\'s Name',
      name: 'fathersName',
      value: '',
      required: true
    },
    {
      type: 'tel',
      label: 'Father\'s Contact Number',
      name: 'fathersContactNumber',
      value: '',
      required: true
    },
    {
      type: 'text',
      label: 'Mother\'s Name',
      name: 'mothersName',
      value: '',
      required: true
    },
    {
      type: 'tel',
      label: 'Mother\'s Contact Number',
      name: 'mothersContactNumber',
      value: '',
      required: true
    },
    {
      type: 'text',
      label: 'Brother\'s Name',
      name: 'brothersName',
      value: '',
      required: true
    },
    {
      type: 'tel',
      label: 'Brother\'s Contact Number',
      name: 'brothersContactNumber',
      value: '',
      required: true
    }
    ,
    {
      type: 'text',
      label: 'Sister\'s Name',
      name: 'sistersName',
      value: '',
      required: true
    },
    {
      type: 'tel',
      label: 'Sister\'s Contact Number',
      name: 'sistersContactNumber',
      value: '',
      required: true
    },
    {
      type: 'text',
      label: 'GrandFather\'s Name',
      name: 'grandFatherName',
      value: '',
      required: true
    },
    {
      type: 'tel',
      label: 'Grand Father\'s Contact Number',
      name: 'grandFatherContactNumber',
      value: '',
      required: true
    },
    {
      type: 'text',
      label: 'Grand Mother\'s Name',
      name: 'grandmothersName',
      value: '',
      required: true
    },
    {
      type: 'tel',
      label: 'Grand Mother\'s Contact Number',
      name: 'grandmothersContactNumber',
      value: '',
      required: true
    },
    {
      type: 'text',
      label: 'Address Line 1',
      name: 'addressLine1',
      value: '',
      required: true
    },
    {
      type: 'text',
      label: 'City',
      name: 'city',
      value: '',
      required: true
    },
    {
      type: 'text',
      label: 'State/Province',
      name: 'stateProvince',
      value: '',
      required: true
    },
    {
      type: 'text',
      label: 'Country',
      name: 'country',
      value: '',
      required: true
    },
    {
      type: 'text',
      label: 'Postal Code',
      name: 'postalCode',
      value: '',
      required: true
    },
    {
      type: 'email',
      label: 'Email Address',
      name: 'emailAddress',
      value: '',
      required: true
    },
    {
      type: 'tel',
      label: 'Phone Number',
      name: 'phoneNumber',
      value: '',
      required: true
    },
    {
      type: 'text',
      label: 'National ID Number',
      name: 'nationalIdNumber',
      value: '',
      required: true
    },
    {
      type: 'text',
      label: 'Social Security Number',
      name: 'socialSecurityNumber',
      value: '',
      required: false
    },
    {
      type: 'text',
      label: 'Tax Identification Number',
      name: 'taxIdentificationNumber',
      value: '',
      required: true
    },
    {
      type: 'select',
      label: 'Employment Status',
      name: 'employmentStatus',
      options: ['Employed', 'Self-Employed', 'Unemployed', 'Retired'],
      value: '',
      required: true
    },
    {
      type: 'text',
      label: 'Employer Name',
      name: 'employerName',
      value: '',
      required: false
    },
    {
      type: 'text',
      label: 'Employer Address',
      name: 'employerAddress',
      value: '',
      required: false
    },
    {
      type: 'text',
      label: 'Job Title',
      name: 'jobTitle',
      value: '',
      required: false
    },
    {
      type: 'text',
      label: 'Employment Duration',
      name: 'employmentDuration',
      value: '',
      required: false
    },
    {
      type: 'text',
      label: 'Emergency Contact Name',
      name: 'emergencyContactName',
      value: '',
      required: true
    },
    {
      type: 'text',
      label: 'Emergency Contact Relationship',
      name: 'emergencyContactRelationship',
      value: '',
      required: true
    },
    {
      type: 'tel',
      label: 'Emergency Contact Phone Number',
      name: 'emergencyContactPhoneNumber',
      value: '',
      required: true
    },
    {
      type: 'file',
      label: 'Upload Photo ID',
      name: 'uploadPhotoId',
      required: true
    },
    {
      type: 'file',
      label: 'Upload Address Proof',
      name: 'uploadAddressProof',
      required: true
    },
    {
      type: 'checkbox',
      label: 'Agreement to Terms and Conditions',
      name: 'agreementToTermsAndConditions',
      required: true
    },
    {
      type: 'checkbox',
      label: 'Anti-Money Laundering (AML) Compliance Agreement',
      name: 'amlComplianceAgreement',
      required: true
    },
    {
      type: 'checkbox',
      label: 'FATCA Compliance Agreement',
      name: 'fatcaComplianceAgreement',
      required: false
    },
    {
      type: 'checkbox',
      label: 'Consent to Use Personal Data',
      name: 'consentToUsePersonalData',
      required: true
    },
    {
      type: 'signature',
      label: 'Digital Signature',
      name: 'digitalSignature',
      required: true
    }
  ];

}
