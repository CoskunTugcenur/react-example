import React from 'react'
import { Dropdown, Image, Label, Menu } from 'semantic-ui-react';

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://media-exp1.licdn.com/dms/image/C4E03AQF7NhT-NAyjCg/profile-displayphoto-shrink_100_100/0/1633977188320?e=1650499200&v=beta&t=_n1vYmQReM4HIh5EGjnBWy9BFSXsFxZPydaUmB0L4Qc"/>
                <Dropdown pointing="top left" text="Tugce">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
