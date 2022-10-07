import { RegistrarUsuarioViewModel } from "./registrar-usuario.view-model";

export class TokenViewModel{
  chave:string;
  dataExpiracao:Date;

  usuarioToken: RegistrarUsuarioViewModel;
}

export class UsuarioTokenViewModel{
id:string;
nome:string;
email:string;
}
