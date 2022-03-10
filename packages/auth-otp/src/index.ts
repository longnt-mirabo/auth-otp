export class AuthOTP {
  generateHOTP() {
    return "hotp";
  }

  validateHOTP() {
    return true;
  }

  generateTOTP() {
    return "totp";
  }

  validateTOTP() {
    return true;
  }
}
