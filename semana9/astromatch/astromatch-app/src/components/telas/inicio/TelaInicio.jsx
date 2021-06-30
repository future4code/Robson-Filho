import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import url from '../../../api/astromatch'


export const TelaInicio = () => {

    const [id, setId] = useState([])
    const [age, setAge] = useState('')
    const [name, setName] = useState('')
    const [photo, setPhoto] = useState('')
    const [bio, useState] = useState('')

    useEffect(() => {
        url()
    }, [])

    return (
    <div>
        <h1>
            INICIO
        </h1>
    </div>
    )
}