package gm.inventarios;

import gm.inventarios.modelo.Producto;
import gm.inventarios.repositorio.ProductoRepositorio;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private ProductoRepositorio productoRepository;

    @Override
    public void run(String... args) throws Exception {
        if(productoRepository.count() == 0) {
            productoRepository.save(new Producto(null, "Producto 1", 1000.0, 10));
            productoRepository.save(new Producto(null, "Producto 2", 1500.0, 5));
            productoRepository.save(new Producto(null, "Producto 3", 2000.0, 8));
            productoRepository.save(new Producto(null, "Producto 4", 1200.0, 15));
            productoRepository.save(new Producto(null, "Producto 5", 1800.0, 12));
        }
    }
}

