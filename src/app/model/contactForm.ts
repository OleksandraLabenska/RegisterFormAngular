export class ContactForm{
    private nombre: string;
    private apellidos: string;
    private telefono: string;
    private email: string;
    private direccion: string;
    private localidad: string;
    private provincia: string;
    private password: string;
    private confirm_password: string;
    private condiciones: boolean;


    constructor(nombre: string, apellidos: string, telefono: string, email: string, direccion: string,
        localidad: string, provincia: string, password: string, confirm_password: string, condiciones: boolean ){
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.telefono = telefono;
            this.email = email;
            this.direccion = direccion;
            this.localidad = localidad;
            this.provincia = provincia;
            this.password = password;
            this.confirm_password = confirm_password;
            this.condiciones = condiciones;
    }

    
    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getApellidos(): string {
        return this.apellidos;
    }

    public setApellidos(apellidos: string): void {
        this.apellidos = apellidos;
    }

    public getTelefono(): string {
        return this.telefono;
    }

    public setTelefono(telefono: string): void {
        this.telefono = telefono;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getDireccion(): string {
        return this.direccion;
    }

    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }

    public getLocalidad(): string {
        return this.localidad;
    }

    public setLocalidad(localidad: string): void {
        this.localidad = localidad;
    }

    public getProvincia(): string {
        return this.provincia;
    }

    public setProvincia(provincia: string): void {
        this.provincia = provincia;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public getConfirm_password(): string {
        return this.confirm_password;
    }
    public setConfirm_password(value: string) {
        this.confirm_password = value;
    }

    public getCondiciones(): boolean {
        return this.condiciones;
    }

    public setCondiciones(condiciones: boolean): void {
        this.condiciones = condiciones;
    }

}

