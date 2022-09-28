const d = new Date();
let year = d.getFullYear();

export default function Footer() {
    return (
      <footer>
        <div className="my-10 text-sm text-center">
            Copyright {year} by <a href="https://github.com/cheekyprorgammer" target="_blank" rel="noopener noreferrer"><span className="text-blue-500">cheekyprogrammer</span></a>.
        </div>
      </footer>
    )
  }