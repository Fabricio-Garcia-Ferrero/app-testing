import Formulario from "../components/Formulario";
import { mayorDeEdad } from "../components/Formulario";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


describe('Formulario.jsx pruebas', () => {
    describe('Mayor o Menor de edad',() => {
        test('Debe retornar false', () =>{
            const result = mayorDeEdad(12);
            expect(result).toBeFalsy();
        })
        test('Debe retornar true', () =>{
            const result = mayorDeEdad(20);
            expect(result).toBeTruthy();
        })
        test('Debe retornar true', () =>{
            const result = mayorDeEdad(18);
            expect(result).toBeTruthy();
        })
        test('Debe retornar null', () =>{
            const result = mayorDeEdad(-2);
            expect(result).toBeNull();
        })
        test('Debe retornar Boolean', () =>{
            const result = mayorDeEdad(18);
            expect(typeof result).toBe('boolean');
        })
    });

    describe('Formulario', () => {
        let nombreTF
        let edadTF
        let button
        let heading2
        let avatar
        let heading6

        beforeEach(() =>{
            render(<Formulario/>);
            nombreTF = screen.getByLabelText('Nombre')
            edadTF = screen.getByLabelText('Edad')
            button = screen.getByRole('button',{ name : 'Enviar'});
            avatar = screen.getByRole('img');
            heading2 = screen.getByRole('heading', { level : 2 })
        });

        test('Existe textfiel de nombre',() => {
            expect(nombreTF).toBeInTheDocument()
        })
        test('Existe textfiel de edad',() => {
            expect(edadTF).toBeInTheDocument()
        })
        test('Existe botón',() => {
            expect(button).toBeInTheDocument()
        })
        test('Existe la cabecera 2',() => {
            expect(heading2).toBeInTheDocument()
        })
        test('Existe el avatar', () => {
            expect(avatar).toBeInTheDocument()
        })
        test('Aparece heading 6', async () => {
            const user = userEvent.setup()
            await user.click(button)
            heading6 = screen.getByRole('heading', { level : 2 })
            expect(heading6).toBeInTheDocument()
        })
    })
})