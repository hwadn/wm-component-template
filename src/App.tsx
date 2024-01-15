import { useState } from 'react'
import { Layout } from 'antd'
import { FormProps } from 'antd/lib/form'

import { StyledHeader, StyledSider } from './style'
import { Component, Setting, IFormValues, defaultFormValues } from './export'

const { Content } = Layout

function App() {
  const [formValues, setFormValues] = useState<IFormValues>(defaultFormValues)

	const handleFormValueChange: FormProps['onValuesChange'] = (_, values) => {
		setFormValues(values)
	}

  return (
    <Layout style={{ height: '100%' }}>
			<StyledHeader>小蜜蜂</StyledHeader>
			<Layout style={{ height: '100%', backgroundColor: 'gray' }}>
				<StyledSider>
					pre
				</StyledSider>
				<Content style={{ padding: '20px 60px' }}>
					<div style={{ backgroundColor: 'white', height: '100%' }}>
						<Component formValues={formValues} />
					</div>
				</Content>
				<StyledSider>
					<Setting onValuesChange={handleFormValueChange} />
				</StyledSider>
			</Layout>
    </Layout>
  )
}

export default App
