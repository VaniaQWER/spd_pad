/*
 * @Author: yuwei - 拣货下架
 * @Date: 2018-09-08 00:47:12 
* @Last Modified time: 2018-09-08 00:47:12 
 */

import React, { PureComponent } from 'react';
import { NavBar, Icon , SearchBar , Tabs , Flex , Card, Button} from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import ListViewScroll from '../../components/listViewScroll';
import { _local } from '../../api/local'

function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}
const tabs = [
  { title: '待拣货' },
  { title: '已拣货' }
];
class Undercarriage extends PureComponent {
  
  state = {
    url: '',
    searchName: '',
    showHistory:false
  }

  componentDidMount() {
  }

  clickTab = (tab,index)=>{
    console.log(tab,index)
  }

  toDetail = (id)=>{
    const { history } = this.props;
    history.push('/undercarriage/detail')
  }
  render() {
    const { searchName , showHistory} = this.state;
    const { history } = this.props;
    return (
      <div>
        {/* 导航栏 */}
        <NavBar
          mode="dark"
          leftContent={[
            <Icon key="0" type="left" style={{ marginRight: '10px' }} />,
            <span key="1">返回</span>,
          ]}
          onLeftClick={() => history.go(-1)}
          >拣货下架</NavBar>

       

        {
          !showHistory ? 
          <div>
           {/* 搜索栏 */}
          <SearchBar
            placeholder="下架单号"
            onSubmit={value => console.log(value, 'onSubmit')}
            onClear={value => console.log(value, 'onClear')}
            onFocus={() => this.setState({showHistory:true})}
            onBlur={() => console.log('onBlur')}
            onCancel={() => console.log('onCancel')}
            onChange={this.onChange}
          />
          {/* tab页切栏 */}
          <StickyContainer>
            <Tabs 
              tabs={tabs}
              initalPage={'t1'}
              renderTabBar={renderTabBar}
              onTabClick={this.clickTab}
              >
                  <ListViewScroll 
                    url={`${_local}/undercarriage`}
                    queryParams={{
                      searchParam: searchName
                    }}
                    method="GET"
                    item={item => {
                      return (
                        <Card  full  className='scrollList-item' key={item.id} onClick={()=>this.toDetail(item.id)}>
                          <Card.Header
                            title={<span style={{ fontSize: 15,color: '#333',fontWeight: 'bold' }}>拣货单号：{item.id}</span>}
                            extra={<span >零库存补货  待拣货</span>}
                          />
                          <Card.Body>
                            <Flex>
                              <Flex.Item>发起时间 :<span>{item.date }</span></Flex.Item>
                              <Flex.Item>品项数 :<span>{item.total}</span></Flex.Item>
                            </Flex>
                          </Card.Body>
                        </Card>
                      )
                    }}
                  />
                  <ListViewScroll 
                    url={`${_local}/undercarriage`}
                    queryParams={{
                      searchParam: searchName
                    }}
                    method="GET"
                    item={item => {
                      return (
                        <Card  full  className='scrollList-item' key={item.id}>
                          <Card.Header
                            title={<span style={{ fontSize: 15,color: '#333',fontWeight: 'bold' }}>拣货单号：{item.id}</span>}
                            extra={<span >零库存补货  待拣货</span>}
                          />
                          <Card.Body>
                            <Flex>
                              <Flex.Item>发起时间 :<span>{item.date}</span></Flex.Item>
                              <Flex.Item>品项数 :<span>{item.total}</span></Flex.Item>
                            </Flex>
                          </Card.Body>
                        </Card>
                      )
                    }}
                  />
            </Tabs>
          </StickyContainer>
          </div>
        :
        <div>
          <SearchBar placeholder="输入供应商名称" ref={ref => this.autoFocusInst = ref} 
            onCancel={()=>this.setState({showHistory:false})}/>
            <h3>历史搜索记录</h3>
            <Button inline  className='button-gap' onClick={()=>{this.setState({showHistory:false})}}>华润</Button>
            <Button inline  className='button-gap' onClick={()=>{this.setState({showHistory:false})}}>普华信联</Button>
            <Button inline  className='button-gap' onClick={()=>{this.setState({showHistory:false})}}>九州通</Button>
        </div>
        }
        
      </div>
    )
  }
}

export default Undercarriage;