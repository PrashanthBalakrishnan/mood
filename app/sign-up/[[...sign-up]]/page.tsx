import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => (
  <div className="h-screen flex justify-center items-center">
    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
  </div>
)

export default SignUpPage
