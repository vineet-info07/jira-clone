interface SignInLayoutProps {
  children: React.ReactNode;
}

export default function SignInLayout({ children }: SignInLayoutProps) {
  return (
    <div className="flex flex-col">
      <nav className="bg-red-500 h-10">
        <p>Navabr</p>
      </nav>
      {children}
    </div>
  );
}
