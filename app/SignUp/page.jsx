import SignUpForm from "@/components/Auth/SignUpForm";

export default function SignUp() {
  return (
    <div className="container mx-auto text-center text-orange-700 py-8 text">
      <h2 className="text-4xl mt-16 font-semibold mb-4">Create New Account</h2>
      {/* Render the client-side form */}
      <SignUpForm />
    </div>
  );
}