import React from 'react'
import { IFormValues } from '../Setting'
import { Button } from 'antd'

interface IComponentProps {
	formValues: IFormValues
}

export const Component: React.FC<IComponentProps> = ({ formValues }) => {
	const { container, data } = formValues || {}
  const { type, text } = data || {}
	return (
    <div style={{ display: 'flex', justifyContent: 'center', ...container }}>
      <Button type={type}>{text}</Button>
    </div>
  )
}
