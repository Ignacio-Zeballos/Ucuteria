const PRODUCTS = [
    { id: "c1", name: "Espresso", price: 120, category: "Café", img: "☕️"},
    { id: "c2", name: "Latte", price: 180, category: "Café", img: "🥛☕️"},
    { id: "t1", name: "Té Verde", price: 140, category: "Té", img: "🍵"},
    { id: "t2", name: "Té Chai", price: 160, category: "Té", img: "🫖"},
    { id: "p1", name: "Medialuna", price: 90, category: "Pastelería", img: "🥐"},
    { id: "p2", name: "Torta Choc", price: 220, category: "Pastelería", img: "🍰"},
    { id: "s1", name: "Sándwich Jamón", price: 260, category: "Sándwiches", img: "🥪"},
    { id: "s2", name: "Veggie Grill", price: 280, category: "Sándwiches", img: "🥗"}
];


function agregarAlCarrito(id){
    const prod = PRODUCTS.find(p=>p.id===id);
    const item = carrito.find(i=>i.id===id);
    if(item) item.cant++;
    else carrito.push({...prod,cant:1});
    guardarCarrito();
}

function eliminarDelCarrito(id){
    carrito = carrito.filter(i=>i.id!==id);
    guardarCarrito();
}

function cambiarCantidad(id, delta){
    const item = carrito.find(i=>i.id===id);
    if(!item) return;
    item.cant += delta;
    if(item.cant<=0) carrito = carrito.filter(i => i.id!==id);
    guardarCarrito();
}

function guardarCarrito(){
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderCarrito();
}