import MenuHeader from '../sections/menus/MenuHeader';
import ServiceGrid from '../sections/menus/ServiceGrid';
import ThaliDisplay from '../sections/menus/ThaliDisplay';
import MenuList from '../sections/menus/MenuList';
import MenuChecklist from '../sections/menus/MenuChecklist';

export default function MenusPage() {
  return (
    <main className="pt-[70px]">
      <MenuHeader />
      <ServiceGrid />
      <ThaliDisplay />
      <MenuList />
      <MenuChecklist />
    </main>
  );
}
