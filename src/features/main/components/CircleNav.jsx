function CircleNav() {
  return (
    <div className="w-full flex justify-between bg-gradient-to-t from-primary to-amber-100 text-xl rounded-b-lg">
      <button className="px-8 py-4 hover:bg-gradient-to-t from-secondary to-amber-100 border-none rounded-lg min-w-60">
        Bills
      </button>
      <button className="px-8 py-4 hover:bg-gradient-to-t from-secondary to-amber-100 border-none rounded-lg min-w-60">
        Members
      </button>
      <button className="px-8 py-4 hover:bg-gradient-to-t from-secondary to-amber-100 border-none rounded-lg min-w-60">
        Summary
      </button>
    </div>
  );
}

export default CircleNav;
