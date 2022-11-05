import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from './../../service/categoria.service';
import { Categoria } from './../../models/Categoria';
import { IonModal } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  @ViewChild(IonModal) modal: IonModal;

  public categoria: Categoria = new Categoria();
  public carregaCategoriaParaEdicao: Categoria = new Categoria();

  public username = environment.username;
  public avatar = environment.avatar;
  public id = environment.id;
  public idMemoria = 0;

  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    window.scroll(0, 0);

    if(localStorage.getItem('token') == null) {
      this.router.navigate(['/login']);

    }

    const id = this.route.snapshot.params.id;

    this.idMemoria = id;

    this.findByIdCategoria(id);

  }

  findByIdCategoria(id: number) {
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria) => {
      this.carregaCategoriaParaEdicao = resp;

    });

  }

  atualizaCategoria() {
    this.categoriaService.putCategoria(this.carregaCategoriaParaEdicao).subscribe((resp: Categoria) => {

    });

    setTimeout(() => {
      this.router.navigate(['/home', this.idMemoria]);

    }, 100);

  }

  memoriaCategoria() {
    this.router.navigate(['/home', this.idMemoria]);
  }

}
