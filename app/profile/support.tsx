import {
  YStack,
  Text,
  Input,
  Button,
  TextArea,
  XStack,
  Label,
  Accordion,
  Paragraph,
  Square,
  ScrollView,
  Card,
  Separator
} from 'tamagui';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';

const faqItems = [
  {
    id: 'faq1',
    question: 'How long does delivery take?',
    answer: 'Orders typically arrive within 3–5 business days depending on your location.',
  },
  {
    id: 'faq2',
    question: 'Can I change my order?',
    answer: 'Yes, you can modify your order within 2 hours of placing it from the profile page.',
  },
  {
    id: 'faq3',
    question: 'Do you offer refunds?',
    answer:
      'We offer refunds on eligible items within 7 days of delivery. Read our refund policy for more.',
  },
  {
    id: 'faq4',
    question: 'Is my payment secure?',
    answer:
      'Absolutely. We use encrypted payment gateways that are PCI-DSS compliant.',
  },
];

export default function SupportScreen() {
  return (
    <>
     <Stack.Screen options={{title:"Support"}}/>
    <ScrollView backgroundColor="white">
      <YStack p="$4" gap="$6">
        <Text fontSize="$9" fontWeight="800" color="#313131">
          Support
        </Text>

        <Text color="#313131" fontSize="$5">
          Need help? Reach out or check our FAQs below.
        </Text>

        {/* Quick Access Cards */}
        <YStack gap="$3">
          <Text fontSize="$6" fontWeight="600" color="#313131">Quick Access</Text>

          {[
            {
              icon: "refresh-outline",
              title: "Order Issues",
              desc: "Problems with a delivery or return?"
            },
            {
              icon: "card-outline",
              title: "Payment Support",
              desc: "Issues with billing or refund?"
            },
            {
              icon: "help-buoy-outline",
              title: "General Inquiry",
              desc: "Have a question or feedback?"
            }
          ].map(({ icon, title, desc }, idx) => (
            <Card
              key={idx}
              bordered
              backgroundColor="#F9F2ED"
              borderColor="#E3E3E3"
              padding="$3"
              borderRadius="$4"
            >
              <XStack gap="$3" ai="center">
                <Ionicons name={icon} size={24} color="#C67C4E" />
                <YStack>
                  <Text fontWeight="600" color="#313131">{title}</Text>
                  <Text color="#313131" fontSize="$4">{desc}</Text>
                </YStack>
              </XStack>
            </Card>
          ))}
        </YStack>

        <Separator my="$4" borderColor="#E3E3E3" />

        {/* Contact Form */}
        <YStack gap="$4">
          <Text fontSize="$6" fontWeight="700" color="#313131">Submit a Request</Text>

          <YStack gap="$3">
            <Label color="#313131" fontWeight="600">Subject</Label>
            <Input
              placeholder="e.g. Payment issue"
              backgroundColor="#FFFFFF"
              borderColor="#E3E3E3"
              borderWidth={1}
              borderRadius="$4"
            />

            <Label color="#313131" fontWeight="600">Message</Label>
            <TextArea
              placeholder="Explain your issue..."
              h={130}
              backgroundColor="#FFFFFF"
              borderColor="#E3E3E3"
              borderWidth={1}
              borderRadius="$4"
            />

            <Button
              backgroundColor="#C67C4E"
              color="white"
              borderRadius="$4"
              pressStyle={{ opacity: 0.9 }}
            >
              Submit Request
            </Button>
          </YStack>
        </YStack>

        {/* Contact Options */}
        <YStack gap="$4" mt="$6">
          <Text fontSize="$6" fontWeight="700" color="#313131">
            Contact Options
          </Text>

          <XStack gap="$3" ai="center">
            <Ionicons name="mail-outline" size={22} color="#C67C4E" />
            <Text color="#313131">support@yourapp.com</Text>
          </XStack>

          <XStack gap="$3" ai="center">
            <Ionicons name="call-outline" size={22} color="#C67C4E" />
            <Text color="#313131">+213 600 123 456</Text>
          </XStack>
        </YStack>

        {/* FAQ Section */}
        <YStack gap="$4" mt="$6" pb="$10">
          <Text fontSize="$6" fontWeight="700" color="#313131">
            Frequently Asked Questions
          </Text>

          <Accordion type="multiple" overflow="hidden" gap="$3">
            {faqItems.map(({ question, answer, id }) => (
              <Accordion.Item key={id} value={id}>
                <Accordion.Trigger
                  flexDirection="row"
                  justifyContent="space-between"
                  ai="center"
                  px="$3"
                  py="$3"
                  borderRadius="$4"
                  backgroundColor="#FFFFFF"
                  borderColor="#E3E3E3"
                  borderWidth={1}
                >
                  {({ open }: { open: boolean }) => (
                    <>
                      <Paragraph fontWeight="600" color="#313131">
                        {question}
                      </Paragraph>
                      <Square animation="quick" rotate={open ? '180deg' : '0deg'}>
                        <Ionicons name="chevron-down" size={20} color="#C67C4E" />
                      </Square>
                    </>
                  )}
                </Accordion.Trigger>
                <Accordion.HeightAnimator>
                  <Accordion.Content
                    px="$3"
                    py="$3"
                    backgroundColor="#F9F2ED"
                    borderBottomLeftRadius="$4"
                    borderBottomRightRadius="$4"
                    borderColor="#E3E3E3"
                    borderTopWidth={1}
                  >
                    <Paragraph color="#313131">{answer}</Paragraph>
                  </Accordion.Content>
                </Accordion.HeightAnimator>
              </Accordion.Item>
            ))}
          </Accordion>
        </YStack>
      </YStack>
    </ScrollView>
    </>
  );
}
