import React from 'react';
import {DelButton, DeleteWrapper} from '../../styles/Elements';
import { ButtonProps } from 'react-native';

const DeleteButton = (props: ButtonProps) => {
  return (
    <DeleteWrapper {...props}>
      <DelButton>&#10006;</DelButton>
    </DeleteWrapper>
  )
}

export default DeleteButton
