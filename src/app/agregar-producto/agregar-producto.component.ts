import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html'
})
//exportar el producto que usaremos en el formulario
export class AgregarProductoComponent {
  producto: Producto = new Producto();

  constructor(private ProductoServicio: ProductoService,
    private enrutador : Router){}

    onSubmit(){
      this.guardarProducto();
    }
    guardarProducto(){
      this.ProductoServicio.agregarProducto(this.producto).subscribe(
        {
          next: (datos) =>{
            this.irListaProductos();

          },
          error:(error: any) =>{console.log(error)}
        }
      );
      
    }
    irListaProductos(){
      this.enrutador.navigate(['/productos'])
    }
}
