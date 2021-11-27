import { Component, OnInit } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  xml = '<?xml version="1.0" encoding="UTF-8"?>'+
  '<xmlcep>'+
      '<cep>01001-000</cep>'+
      '<logradouro>Praça da Sé</logradouro>'+
      '<complemento>lado ímpar</complemento>'+
      '<bairro>Sé</bairro>'+
      '<localidade>São Paulo</localidade>'+
      '<uf>SP</uf>'+
      '<ibge>3550308</ibge>'+
      '<gia>1004</gia>'+
      '<ddd>11</ddd>'+
      '<siafi>7107</siafi>'+
  '</xmlcep>';

  items :any[] = [];

  constructor(
    private ngxXml2jsonService: NgxXml2jsonService
  ) {}

  ngOnInit(){
    this.convert();
  }

  convert(){
    const parser = new DOMParser();
    const xml = parser.parseFromString(this.xml, 'text/xml');
    const obj = this.ngxXml2jsonService.xmlToJson(xml);
    this.items.push(obj);
    console.log(JSON.stringify(obj));
  }

}
