const points = [
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: 5, y: 6 },
    { x: 7, y: 8 },
    { x: 9, y: 10 },
    { x: 11, y: 12 },
    { x: 13, y: 14 },
    { x: 15, y: 16 },
    { x: 17, y: 18 },
    { x: 19, y: 20 }
  ];
  
  // Tampilkan setiap titik koordinat
  console.log("Titik Koordinat:");
  points.forEach(point => {
    console.log(`(${point.x}, ${point.y})`);
  });