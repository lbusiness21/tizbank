const phoneNumberField = document.getElementById('phoneNumber');
const signInWithPhoneButton = document.getElementById('signInWithPhone');
const getCodeButton = document.getElementById('getCode');
const codeField = document.getElementById('code');

const auth = firebase.auth();

window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

recaptchaVerifier.render().then(widgetId => {
  window.recaptchaWidgetId = widgetId;
})

const sendVerificationCode = () => {
  const phoneNumber = phoneNumberField.value;
  const appVerifier = window.recaptchaVerifier;

  auth.signInWithPhoneNumber(phoneNumber, appVerifier)
  .then(confirmationResult => {
    const sentCodeId = confirmationResult.verificationId;
    signInWithPhoneButton.addEventListener('click', () => signInWithPhone(sentCodeId));
  })
}

const signInWithPhone = sentCodeId => {
  const code = codeField.value;
  const credential = firebase.auth.PhoneAuthProvider.credential(sentCodeId, code);
  auth.signInWithCredential(credential)
  .then(() => {
    window.location.assign('chime');
  })
  .catch(error => {
    console.error(error);
  })
}

getCodeButton.addEventListener('click', sendVerificationCode);


