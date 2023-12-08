import React, { FC, SyntheticEvent, useCallback, useContext, useState } from 'react'
import { FlexRow } from './Flex'
import{GiCancel} from "react-icons/gi"
import { SearchContext } from '../../contexts/SearchContext';
import { UserWrapper } from '../users/usersStyle';

// export type SyntheticHTMLInputEvent = SyntheticEvent<HTMLInputElement & EventTarget & {value: string}>;  не работает

export type HTMLInputEvent ={target: {value: string, name: string}}

interface PropsInterface {

}

export const Search:FC<PropsInterface> = () => {
const {value, setValue} = useContext(SearchContext)!;


// const[value, setValue]= useState<string>("")
// SyntheticEvent<HTMLInputElement, InputEvent>
//ChangeEventHandler<HTMPInputElement
    const onChange = useCallback((event: HTMLInputEvent) => {
        setValue(event.target.value)
    }, [setValue])

    const onClear = useCallback(() => {
setValue("")
    }, [setValue]);



      return (
        <UserWrapper>
    <FlexRow width='100%' alignItems='center'>

<input className='search-input' value={value} onChange={onChange} placeholder='Search' />
<GiCancel size="30px" onClick={() => onClear()} />

    </FlexRow>
    </UserWrapper>
  )
}
