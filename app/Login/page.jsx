import LoginForm from "@/components/Auth/LoginForm";


export default function Login() {
  return (
    <div className="container mx-auto text-center py-8">
      <h2 className="text-4xl mt-16 font-semibold text-orange-700 mb-4">Welcome Back</h2>
      {/* Render the client-side form */}
      <LoginForm />
    </div>
  );
}