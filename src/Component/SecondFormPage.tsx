
interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
}

function SecondFormPage() {
  // Retrieve user details from localStorage
  const userDetails: FormData = JSON.parse(localStorage.getItem('userDetails') || '{}');

  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <h2>User Details</h2>
        <p>Name: {userDetails.name}</p>
        <p>Phone Number: {userDetails.phoneNumber}</p>
        <p>Email: {userDetails.email}</p>
      </div>
    </div>
    </>
  );
}

export default SecondFormPage;
