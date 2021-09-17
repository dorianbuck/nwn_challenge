import React from 'react'
import { Header, Card } from 'semantic-ui-react'

const NewsCard = (props) => {
  return (
    <Card
      image='https://editorial.fxstreet.com/images/Markets/Currencies/Digital%20Currencies/Bitcoin/bitcoins-52602600_Large.jpg'
      header='DBS Bank to launch cryptocurrency exchange after condemning Bitcoin a Ponzi scheme in 2017'
      meta={`By: ${'Lorenzo Stroe'} at ${'FXStreet'}`}
      description='DBS Bank of Singapore has just announced the launch of a digital asset exchange featuring Bitcoin, Ethereum, Bitcoin Cash, and XRP and several fiat cu'
      extra={<Header as='h6'>`Published at {"2020-12-10T20:29:20Z"}`</Header>}

    />
  )
}

export default NewsCard
