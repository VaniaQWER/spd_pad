import React, { PureComponent } from 'react';
import { NavBar, Icon , Accordion, List , Flex} from 'antd-mobile';

class StockDetail extends PureComponent {
  render() {
    return (
      <div>
        {/* 导航栏 */}
        <NavBar
        mode="light"
        leftContent={[
          <Icon key="0" type="left" style={{ marginRight: '10px' }} />,
          <span key="1">返回</span>,
        ]}
        onLeftClick={() => console.log('onLeftClick')}
        >详情</NavBar>

        <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
          <Accordion.Panel header="产品信息" style={{marginTop: 25}}>
            <List className="my-list">
              <List.Item>
                <Flex justify="between">
                  <Flex.Item>通用名</Flex.Item>
                  <Flex.Item>
                    注射用复方甘草酸苷
                  </Flex.Item>
                </Flex>
              </List.Item>
              <List.Item>
                <Flex justify="between">
                  <Flex.Item>商品名</Flex.Item>
                  <Flex.Item>
                    注射用复方甘草酸苷
                  </Flex.Item>
                </Flex>
              </List.Item>
              <List.Item>
                <Flex justify="between">
                  <Flex.Item>规格</Flex.Item>
                  <Flex.Item>
                    注射用复方甘草酸苷
                  </Flex.Item>
                </Flex>
              </List.Item>
              <List.Item>
                <Flex justify="between">
                  <Flex.Item>剂型</Flex.Item>
                  <Flex.Item>
                    注射剂(冻干粉针剂）
                  </Flex.Item>
                </Flex>
              </List.Item>
              <List.Item>
                <Flex justify="between">
                  <Flex.Item>生产厂家</Flex.Item>
                  <Flex.Item>
                  浙江安宝药业有限公司
                  </Flex.Item>
                </Flex>
              </List.Item>
              <List.Item>
                <Flex justify="between">
                  <Flex.Item>批准文号</Flex.Item>
                  <Flex.Item>
                  国药准字8594525556
                  </Flex.Item>
                </Flex>
              </List.Item>
              <List.Item>
                <Flex justify="between">
                  <Flex.Item>包装规格</Flex.Item>
                  <Flex.Item>
                  80mg*12包
                  </Flex.Item>
                </Flex>
              </List.Item>
            </List>
          </Accordion.Panel>


          <Accordion.Panel header={(
            <Flex justify="between">
              <Flex.Item>货位</Flex.Item>
              <Flex.Item>
                  A1210
                  <span className='fr mr-middle'>200</span>
              </Flex.Item>
            </Flex>
            )} 
            style={{marginTop: 25}}>
            <List className="my-list">
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>货位类型</Flex.Item>
                    <Flex.Item>补货货位</Flex.Item>
                  </Flex>
                </List.Item>
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>数量</Flex.Item>
                    <Flex.Item>200</Flex.Item>
                  </Flex>
                </List.Item>
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>单位</Flex.Item>
                    <Flex.Item>支</Flex.Item>
                  </Flex>
                </List.Item>
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>供应商</Flex.Item>
                    <Flex.Item>华润药业集团</Flex.Item>
                  </Flex>
                </List.Item>
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>生产批号</Flex.Item>
                    <Flex.Item>PH123333</Flex.Item>
                  </Flex>
                </List.Item>
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>生产日期</Flex.Item>
                    <Flex.Item>2018-08-02</Flex.Item>
                  </Flex>
                </List.Item>
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>有效期至</Flex.Item>
                    <Flex.Item>2018-08-02</Flex.Item>
                  </Flex>
                </List.Item>
              </List>
          </Accordion.Panel>
          <Accordion.Panel header={(
            <Flex justify="between">
              <Flex.Item>货位</Flex.Item>
              <Flex.Item>
                  A1210
                  <span className='fr mr-middle'>200</span>
              </Flex.Item>
            </Flex>
            )} >
            <List className="my-list">
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>货位类型</Flex.Item>
                    <Flex.Item>补货货位</Flex.Item>
                  </Flex>
                </List.Item>
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>数量</Flex.Item>
                    <Flex.Item>200</Flex.Item>
                  </Flex>
                </List.Item>
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>单位</Flex.Item>
                    <Flex.Item>支</Flex.Item>
                  </Flex>
                </List.Item>
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>供应商</Flex.Item>
                    <Flex.Item>华润药业集团</Flex.Item>
                  </Flex>
                </List.Item>
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>生产批号</Flex.Item>
                    <Flex.Item>PH123333</Flex.Item>
                  </Flex>
                </List.Item>
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>生产日期</Flex.Item>
                    <Flex.Item>2018-08-02</Flex.Item>
                  </Flex>
                </List.Item>
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>有效期至</Flex.Item>
                    <Flex.Item>2018-08-02</Flex.Item>
                  </Flex>
                </List.Item>
              </List>
          </Accordion.Panel>
          <Accordion.Panel header={(
            <Flex justify="between">
              <Flex.Item>货位</Flex.Item>
              <Flex.Item>
                  A1210
                  <span className='fr mr-middle'>200</span>
              </Flex.Item>
            </Flex>
            )}>
            <List className="my-list">
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>货位类型</Flex.Item>
                    <Flex.Item>补货货位</Flex.Item>
                  </Flex>
                </List.Item>
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>数量</Flex.Item>
                    <Flex.Item>200</Flex.Item>
                  </Flex>
                </List.Item>
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>单位</Flex.Item>
                    <Flex.Item>支</Flex.Item>
                  </Flex>
                </List.Item>
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>供应商</Flex.Item>
                    <Flex.Item>华润药业集团</Flex.Item>
                  </Flex>
                </List.Item>
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>生产批号</Flex.Item>
                    <Flex.Item>PH123333</Flex.Item>
                  </Flex>
                </List.Item>
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>生产日期</Flex.Item>
                    <Flex.Item>2018-08-02</Flex.Item>
                  </Flex>
                </List.Item>
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>有效期至</Flex.Item>
                    <Flex.Item>2018-08-02</Flex.Item>
                  </Flex>
                </List.Item>
              </List>
          </Accordion.Panel>
          <Accordion.Panel header={(
            <Flex justify="between">
              <Flex.Item>货位</Flex.Item>
              <Flex.Item>
                  A1210
                  <span className='fr mr-middle text-danger'>50</span>
              </Flex.Item>
            </Flex>
            )} >
            <List className="my-list">
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>货位类型</Flex.Item>
                    <Flex.Item>补货货位</Flex.Item>
                  </Flex>
                </List.Item>
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>数量</Flex.Item>
                    <Flex.Item>200</Flex.Item>
                  </Flex>
                </List.Item>
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>单位</Flex.Item>
                    <Flex.Item>支</Flex.Item>
                  </Flex>
                </List.Item>
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>供应商</Flex.Item>
                    <Flex.Item>华润药业集团</Flex.Item>
                  </Flex>
                </List.Item>
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>生产批号</Flex.Item>
                    <Flex.Item>PH123333</Flex.Item>
                  </Flex>
                </List.Item>
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>生产日期</Flex.Item>
                    <Flex.Item>2018-08-02</Flex.Item>
                  </Flex>
                </List.Item>
                <List.Item>
                  <Flex justify="between">
                    <Flex.Item>有效期至</Flex.Item>
                    <Flex.Item>2018-08-02</Flex.Item>
                  </Flex>
                </List.Item>
              </List>
          </Accordion.Panel>
          
          
        </Accordion>
      </div>
    )
  }
}

export default StockDetail;