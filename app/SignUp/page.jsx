import SignUpForm from "@/components/Auth/SignUpForm";

export default function SignUp() {
  return (
    <div className="container mx-auto py-8 text">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      {/* Render the client-side form */}
      <SignUpForm />
    </div>
  );
}