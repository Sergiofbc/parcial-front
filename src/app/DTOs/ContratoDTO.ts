export interface ContratoDTO {
    contratoId?: number;
    identificador: String;
    valor: number;
    nombre_contratante: String;
    documento_contratante: String;
    nombre_contratista: String;
    documento_contratista: String;
    fecha_inicial: Date;
    fecha_final: Date;
}
