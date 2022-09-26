const d = new Date();
let year = d.getFullYear();

export default function Footer() {
    return (
      <footer>
        <div className="mt-5 text-sm text-center">
            Copyright {year} <a href="https://github.com/cheekyprorgammer"><span className="text-blue-500">cheekyprogrammer</span></a>.
        </div>
      </footer>
    );
  }