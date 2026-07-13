import { useState } from 'react'
import { Avatar } from '@astryxdesign/core/Avatar'
import { Badge } from '@astryxdesign/core/Badge'
import { Button } from '@astryxdesign/core/Button'
import { Card } from '@astryxdesign/core/Card'
import { Heading } from '@astryxdesign/core/Heading'
import { HStack, VStack } from '@astryxdesign/core/Layout'
import { Section } from '@astryxdesign/core/Section'
import { Switch } from '@astryxdesign/core/Switch'
import { Text } from '@astryxdesign/core/Text'
import { TextInput } from '@astryxdesign/core/TextInput'

export default function App() {
  const [email, setEmail] = useState('')
  const [notify, setNotify] = useState(true)

  return (
    <VStack gap={4} padding={4} maxWidth={720}>
      <VStack gap={1}>
        <Heading level={1}>try-astryx</Heading>
        <Text type="supporting" color="secondary">
          테마는 Providers에서 한 번만 연결합니다. 화면에서는 컴포넌트만
          사용하면 됩니다.
        </Text>
      </VStack>

      <Section padding={4}>
        <VStack gap={4}>
          <Heading level={3}>샘플 컴포넌트</Heading>

          <HStack gap={2} wrap="wrap" align="center">
            <Button label="저장하기" variant="primary" />
            <Button label="취소" variant="secondary" />
            <Button label="더보기" variant="ghost" />
            <Button label="삭제" variant="destructive" />
          </HStack>

          <HStack gap={2} wrap="wrap" align="center">
            <Badge label="Active" variant="success" />
            <Badge label="Pending" variant="warning" />
            <Badge label="Failed" variant="error" />
            <Badge label="Design" variant="purple" />
            <Badge label="3" variant="info" />
          </HStack>

          <TextInput
            label="이메일"
            value={email}
            onChange={setEmail}
            placeholder="you@company.com"
            description="브랜드 색·라운드는 appTheme에서 일괄 정의됩니다."
          />

          <Switch
            label="알림 받기"
            description="설정이 즉시 적용됩니다."
            value={notify}
            onChange={setNotify}
          />

          <Card padding={4}>
            <HStack gap={3} align="center">
              <Avatar name="Kim Minji" size="medium" />
              <VStack gap={1}>
                <Heading level={4}>김민지</Heading>
                <Text type="supporting" color="secondary">
                  Product Designer
                </Text>
                <HStack gap={1}>
                  <Badge label="Owner" variant="blue" />
                  <Badge label="Online" variant="success" />
                </HStack>
              </VStack>
            </HStack>
          </Card>
        </VStack>
      </Section>
    </VStack>
  )
}