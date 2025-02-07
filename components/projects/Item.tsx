/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink, LockKeyhole } from 'lucide-react'

interface HeaderLink {
    privateSource: boolean
    url?: string
    icon?: string
}

interface SeeMore {
    before?: string
    after?: string
    url?: string
    text?: string
}

interface ItemProps {
    name: string
    description: string
    headerImg: string
    seeMore?: SeeMore
    techs: string[]
    headerLinks: {
        link: HeaderLink
    }
}

const iconsMap: Record<string, React.ElementType> = {
    ExternalLink: ExternalLink,
    LockKeyhole: LockKeyhole,
    BsGithub: require('react-icons/bs').BsGithub,
    FaFigma: require('react-icons/fa').FaFigma,
    SiPrivateinternetaccess: require('react-icons/si').SiPrivateinternetaccess
}

const PrivateSourceButton = () => (
    <Button variant="outline" size="sm" asChild>
        <Link 
            href="https://github.com/igorttosta" 
            className="flex items-center gap-2 group"
            target="_blank" 
            rel="noopener noreferrer"
        >
            <LockKeyhole className="h-4 w-4 transition-transform group-hover:scale-110" />
            <span>Private source</span>
        </Link>
    </Button>
)

export default function Item({
    name,
    headerImg,
    description,
    seeMore,
    techs,
    headerLinks,
}: ItemProps) {
    const [isHovered, setIsHovered] = useState(false)

    const IconComponent = headerLinks.link.icon ? iconsMap[headerLinks.link.icon] : null;

    return (
        <Card className="group relative flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="p-0">
                <div
                    className="relative h-48 overflow-hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                    <img
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                        src={headerImg}
                        alt={name}
                    />

                    <div className={`absolute inset-0 flex items-center justify-center z-20 bg-background/10 backdrop-blur-sm transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                        {headerLinks.link.privateSource ? (
                            <PrivateSourceButton />
                        ) : (
                            <Button variant="secondary" size="sm" asChild className="transform -translate-y-2 transition-all duration-300 hover:scale-105">
                                <Link 
                                    href={headerLinks.link.url || "#"} 
                                    className="flex items-center gap-2 group"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    {IconComponent && <IconComponent className="h-4 w-4" />}
                                    View Source
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-6 flex flex-col flex-grow space-y-4">
                <div className="flex items-start justify-between gap-4">
                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
                        {name}
                    </h2>
                    {headerLinks && (
                        <div className="flex gap-2">
                            {headerLinks.link.privateSource ? (
                                <PrivateSourceButton />
                            ) : (
                                <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
                                    <Link 
                                        href={headerLinks.link.url || "#"} 
                                        className="flex items-center gap-2 group"
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        {IconComponent && <IconComponent className="h-4 w-4 transition-transform group-hover:scale-110" />}
                                        <span className="hidden sm:inline">Source</span>
                                    </Link>
                                </Button>
                            )}
                        </div>
                    )}
                </div>

                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 flex-grow">
                    {description}
                </p>

                {seeMore && (
                    <p className="text-sm">
                        {seeMore.before}{" "}
                        <Link
                            href={seeMore.url || "#"}
                            className="text-primary hover:text-primary/80 inline-flex items-center gap-1 group"
                        >
                            {seeMore.text}
                            <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                        </Link>{" "}
                        {seeMore.after}
                    </p>
                )}
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 p-6 pt-0">
                {techs.map((tech, index) => (
                    <Badge
                        key={index}
                        variant="secondary"
                        className="bg-muted/50 hover:bg-primary/10 transition-colors duration-300 cursor-default"
                    >
                        {tech}
                    </Badge>
                ))}
            </CardFooter>
        </Card>
    )
}