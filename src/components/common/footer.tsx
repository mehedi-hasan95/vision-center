export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#18191B] py-3 text-white text-center text-sm">
      <p>&copy; 2024-{currentYear} Mehedi Hasan. ALL RIGHTS RESERVED</p>
    </div>
  );
};
