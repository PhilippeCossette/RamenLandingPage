export function Navigation() {
  return (
    <nav className="bg-primary w-full px-5 py-4 flex items-center justify-between fixed top-0 left-0 z-10">
      <div>
        <img
          className="max-w-[100px]"
          src="Dashi-White.png"
          alt="Dashi White"
        />
      </div>
      <div className="flex items-center gap-5 text-xs text-white">
        <a href="">Menu</a>
        <a href="">Why?</a>
        <a href="">Deals</a>
        <button>Order Now</button>
      </div>
    </nav>
  );
}
