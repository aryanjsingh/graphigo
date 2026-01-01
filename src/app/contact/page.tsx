import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Link from 'next/link'

export default function ContactPage() {
    return (
        <section className="py-32 min-h-screen bg-background">
            <div className="mx-auto max-w-4xl px-4 lg:px-0">
                <h1 className="mb-12 text-center text-4xl font-semibold lg:text-5xl">Help us route your inquiry</h1>

                <div className="grid divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0">
                    <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                        <div>
                            <h2 className="mb-3 text-lg font-semibold">Collaborate</h2>
                            <Link
                                href="mailto:hello@graphigo.com"
                                className="text-lg text-primary hover:underline">
                                hello@graphigo.com
                            </Link>
                            <p className="mt-3 text-sm">+1 (555) 000-0000</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                        <div>
                            <h3 className="mb-3 text-lg font-semibold">Press</h3>
                            <Link
                                href="mailto:press@graphigo.com"
                                className="text-lg text-primary hover:underline">
                                press@graphigo.com
                            </Link>
                            <p className="mt-3 text-sm">+1 (555) 000-0000</p>
                        </div>
                    </div>
                </div>

                <div className="h-3 border-x bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]"></div>
                <form
                    action=""
                    className="border px-4 py-12 lg:px-0 lg:py-24">
                    <Card className="mx-auto max-w-lg p-8 sm:p-16">
                        <h3 className="text-xl font-semibold">Let's get you to the right place</h3>
                        <p className="mt-4 text-sm text-muted-foreground">Reach out to our team! We're eager to learn more about how you plan to work with Graphigo.</p>

                        <div className="mt-12 space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">
                                    Full name
                                </Label>
                                <Input
                                    type="text"
                                    id="name"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">
                                    Work Email
                                </Label>
                                <Input
                                    type="email"
                                    id="email"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="country">
                                    Country/Region
                                </Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a country" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="United States">United States</SelectItem>
                                        <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                                        <SelectItem value="Canada">Canada</SelectItem>
                                        <SelectItem value="Australia">Australia</SelectItem>
                                        <SelectItem value="India">India</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="website">
                                    Company Website
                                </Label>
                                <Input
                                    type="url"
                                    id="website"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="job">
                                    Job function
                                </Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a job function" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Marketing">Marketing</SelectItem>
                                        <SelectItem value="Content Creation">Content Creation</SelectItem>
                                        <SelectItem value="Business Development">Business Development</SelectItem>
                                        <SelectItem value="Executive">Executive</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="msg">
                                    Message
                                </Label>
                                <Textarea
                                    id="msg"
                                    rows={3}
                                />
                            </div>
                            <Button className="w-full">Submit</Button>
                        </div>
                    </Card>
                </form>
            </div>
        </section>
    )
}
