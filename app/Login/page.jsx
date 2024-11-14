import LoginForm from "@/components/Auth/LoginForm";


export default function Login() {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      {/* Render the client-side form */}
      <LoginForm />
    </div>
  );
}