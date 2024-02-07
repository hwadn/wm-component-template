import React from 'react'
import { Form, Input, Select, ButtonProps } from 'antd'

const antdButtonTypes: ButtonProps['type'][] = ['dashed', 'default', 'link', 'primary', 'text']

const DataItems: React.FC = () => {
  return (
    <>
    <Form.Item label='文本' name={['data', 'text']} >
      <Input/>
    </Form.Item>
    <Form.Item label='样式' name={['data', 'type']} >
      <Select options={antdButtonTypes.map((type) => ({
        value: type,
        label: type
      }))}/>
    </Form.Item></>
  )
}

export default DataItems
