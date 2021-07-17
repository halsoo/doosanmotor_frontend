import { useState, useEffect } from 'react'

import Nav from '../../src/components/Nav'
import Block from '../../src/components/Shared/Block'
import AdminPanel from '../../src/components/AdminPanel'

function Admin(props) {
    return (
        <div className="w-full h-px min-h-screen">
            <AdminPanel/>
        </div>
    )
}

export default Admin