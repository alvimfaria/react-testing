import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'

import Todo from './Todo'

describe('Tests for Todo component', () =>{
    it('Should add new task when has been submitted', async () => {
        //Renderizando o component
        const { getByTestId, getByText } = render(<Todo/>)

        //buscar o input
        const fieldNode = await waitFor(
            () => getByTestId('form-field')
        )
        
        //digitar no input
        const newTask = "testing..."
        fireEvent.change(
            fieldNode, { target: {value: newTask}}
        )

        //verificar o texto no campo
        expect(fieldNode.value).toEqual(newTask)

        //buscar o botao
        const buttonNode = await waitFor(
            () => getByTestId('form-btn')
        )

        //clicar no botao
        fireEvent.click(buttonNode)

        //buscar a tabela
        const tableNode = await waitFor(
            () => getByTestId('table')
        )

        //Verificar se possui o valor na tabela
        const tdNode = await waitFor(
            () => getByText(newTask)
        )
        expect(tdNode).toBeDefined()
        
    })
})