const signInWithGoogleButton = document.getElementById('signInWithGoogle');

const phoneNumberField = document.getElementById('phoneNumber');
const codeField = document.getElementById('code');
const signInWithPhoneButton = document.getElementById('signInWithPhone');


const auth = firebase.auth();

const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(googleProvider)
  .then(() => {
    window.location.assign('huntington');
  })
  .catch(error => {
    console.error(error);
  })
}
signInWithGoogleButton.addEventListener('click', signInWithGoogle);

const sendVerificationCode = () => {
  const phoneNumber = phoneNumberField.value;

  auth.signInWithPhoneNumber(phoneNumber)
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
    window.location.assign('huntington');
  })
  .catch(error => {
    console.error(error);
  })
}
getCodeButton.addEventListener('click', sendVerificationCode);




auth.onAuthStateChanged(user => {
  if(user)
    window.location.assign('huntington');
})