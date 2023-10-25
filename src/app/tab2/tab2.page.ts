import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public vestuario=[
    { 
      id: 1, 
      produto: "Camisa Flamengo I 22/23 s/n° Torcedor Adidas Masculina - Vermelho+Preto",
      preco:"R$149,99",
      descricao:"A maior paixão do mundo! Prestando homenagem à emoção que pulsa nas arquibancadas quando o Mengo está em campo, a nova Camisa Flamengo Masculina da Adidas chega com as tradicionais listras pretas e vermelhas, mas, desta vez, sobrepostas por linhas finas vermelhas onduladas na horizontal que remetem ao movimento das bandeiras dos torcedores. Confeccionada com tecido leve e altamente respirável, o modelo torcedor do manto titular ainda carrega o brasão rubro-negro bordado na altura do peito. Dentro ou fora do Maracanã, exiba o orgulho de ser Mengão usando a Camisa Masculina do Flamengo!",
      miniDescricao:"A maior paixão do mundo! Prestando homenagem à emoção que pulsa nas arquibancadas quando o Mengo.",
      imagem:"https://static.netshoes.com.br/produtos/camisa-flamengo-i-2223-sn-torcedor-adidas-masculina/68/3ZP-5382-068/3ZP-5382-068_zoom1.jpg" 
  },
]

  constructor() {}

}
