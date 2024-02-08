document.addEventListener("DOMContentLoaded", () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('threejs-container').appendChild(renderer.domElement);

    // Lighting
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Geometry with material
    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshStandardMaterial({ color: 0xffd700, roughness: 0.1, metalness: 0.5 });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    camera.position.z = 50;

    // Animation function
    function animate() {
        requestAnimationFrame(animate);

        torusKnot.rotation.x += 0.008;
        torusKnot.rotation.y += 0.008;

        renderer.render(scene, camera);
    }

    animate();

    // Responsive design
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });
    
});
document.addEventListener("DOMContentLoaded", () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('threejs-container').appendChild(renderer.domElement);

    // Lighting, geometry, animation code remains the same

    // Responsive adjustments
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });
});// Three.js script to create a 3D diamond shape

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Diamond geometry
const geometry = new THREE.Geometry();

// Add vertices for a diamond
geometry.vertices.push(
  new THREE.Vector3(0, 1, 0),   // Top vertex
  new THREE.Vector3(-1, 0, 1),  // Vertices of the bottom face
  new THREE.Vector3(1, 0, 1),
  new THREE.Vector3(1, 0, -1),
  new THREE.Vector3(-1, 0, -1),
  new THREE.Vector3(0, -1, 0)   // Bottom vertex
);

// Add faces to create the diamond shape
geometry.faces.push(
  new THREE.Face3(0, 1, 2),
  new THREE.Face3(0, 2, 3),
  new THREE.Face3(0, 3, 4),
  new THREE.Face3(0, 4, 1),
  new THREE.Face3(5, 2, 1),
  new THREE.Face3(5, 3, 2),
  new THREE.Face3(5, 4, 3),
  new THREE.Face3(5, 1, 4)
);

// Compute the face normals to make the object render correctly
geometry.computeFaceNormals();

const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const diamond = new THREE.Mesh(geometry, material);

scene.add(diamond);
camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // Rotate diamond
  diamond.rotation.x += 0.01;
  diamond.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();









// Add your existing 3D background animation script here

// Carousel functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove('active');
   
      });
      slides[index].classList.add('active');
  }
  
  function nextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
      showSlide(currentSlideIndex);
  }
  
  // Set an interval for the slides to change
  setInterval(nextSlide, 3000); // Change slide every 3 seconds
  
  // Initialize the first slide
  showSlide(currentSlideIndex);
  
  // Contact form submission (Example of handling form submission)
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // Here you can add AJAX call to submit the form data
      alert('Thank you for your message. We will get back to you shortly.');
  });
  




  document.addEventListener('DOMContentLoaded', () => {
    // Select the elements
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mainNav = document.querySelector('.main-nav');

    // Check if elements exist
    if (mobileMenuButton && mainNav) {
        mobileMenuButton.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }
    
    // Your existing scripts for animations, etc.
});



// Existing script...

// Add click event listeners to products
document.querySelectorAll('.product').forEach(product => {
  product.addEventListener('click', () => {
      // Here you can add functionality like opening a modal or redirecting to a product detail page
      console.log('Product clicked!');
  });
});
