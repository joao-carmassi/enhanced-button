import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';

function Footer(): React.ReactNode {
  return (
    <footer className='py-12 text-center text-sm text-muted-foreground'>
      Check out the{' '}
      <HoverCard openDelay={10} closeDelay={100}>
        <HoverCardTrigger asChild>
          <a
            href='https://joao-carmassi.github.io/enhanced-button/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-foreground font-medium hover:underline'
          >
            Github
          </a>
        </HoverCardTrigger>{' '}
        <HoverCardContent className='flex w-64 flex-col gap-0.5 dark'>
          <div className='font-semibold'>@joao-carmassi</div>
          <div>
            An interactive showcase of an enhanced Button component built on top
            of shadcn/ui
          </div>
          <div className='text-muted-foreground mt-1 text-xs'>Feb 22, 2026</div>
        </HoverCardContent>
      </HoverCard>
      page for more information.
    </footer>
  );
}

export default Footer;
