const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-muted-foreground text-sm">
          © {currentYear} Lee Maalgraaff. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
