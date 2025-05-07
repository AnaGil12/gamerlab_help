"use client"

import type React from "react"
import { useState } from "react"
import "./PermissionsManagement.css"
import { ChevronDown } from "../components-admin/icons"

type UserRole = "Jurados" | "Profesores"

interface Permission {
  id: string
  name: string
  enabled: boolean
}

interface RolePermissions {
  role: UserRole
  permissions: Permission[]
}

const PermissionsManagement: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState<UserRole>("Jurados")
  const [rolePermissions, setRolePermissions] = useState<RolePermissions[]>([
    {
      role: "Jurados",
      permissions: [
        { id: "manage_jurors", name: "Gestionar Jurados", enabled: false },
        { id: "manage_subjects", name: "Gestionar Materias y NRC", enabled: false },
        { id: "manage_professors", name: "Gestionar Profesores", enabled: false },
        { id: "manage_criteria", name: "Gestionar Criterios de Calificacion", enabled: false },
        { id: "monitor_event", name: "Monitoreo del evento", enabled: false },
        { id: "view_games", name: "Ver Juegos Disponibles", enabled: true },
      ],
    },
    {
      role: "Profesores",
      permissions: [
        { id: "manage_jurors", name: "Gestionar Jurados", enabled: true },
        { id: "manage_subjects", name: "Gestionar Materias y NRC", enabled: true },
        { id: "manage_professors", name: "Gestionar Profesores", enabled: false },
        { id: "manage_criteria", name: "Gestionar Criterios de Calificacion", enabled: true },
        { id: "monitor_event", name: "Monitoreo del evento", enabled: true },
        { id: "view_games", name: "Ver Juegos Disponibles", enabled: true },
      ],
    },
  ])

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const selectRole = (role: UserRole) => {
    setSelectedRole(role)
    setIsDropdownOpen(false)
  }

  const togglePermission = (permissionId: string) => {
    setRolePermissions(
      rolePermissions.map((rp) => {
        if (rp.role === selectedRole) {
          return {
            ...rp,
            permissions: rp.permissions.map((p) => (p.id === permissionId ? { ...p, enabled: !p.enabled } : p)),
          }
        }
        return rp
      }),
    )
  }

  const getCurrentPermissions = () => {
    return rolePermissions.find((rp) => rp.role === selectedRole)?.permissions || []
  }

  const savePermissions = () => {
    // Here you would typically make an API call to save the permissions
    console.log("Saving permissions for", selectedRole, getCurrentPermissions())
    alert(`Permisos guardados para ${selectedRole}`)
  }

  return (
    <div className="permissions-container">
      <h1 className="permissions-title">¡Bienvenido al apartado de permisos!</h1>
      <p className="permissions-subtitle">Selecciona los permisos para cada Participante del evento</p>

      <div className="role-selector">
        <div className="dropdown">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            {selectedRole} <ChevronDown />
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <button className="dropdown-item" onClick={() => selectRole("Jurados")}>
                Jurados
              </button>
              <button className="dropdown-item" onClick={() => selectRole("Profesores")}>
                Profesores
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="permissions-list">
        {getCurrentPermissions().map((permission) => (
          <div className="permission-item" key={permission.id}>
            <div className="permission-name">{permission.name}</div>
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={permission.enabled}
                onChange={() => togglePermission(permission.id)}
                className="permission-checkbox"
              />
              <span className="checkmark"></span>
            </label>
          </div>
        ))}
      </div>

      <div className="permissions-actions">
        <button className="save-button" onClick={savePermissions}>
          Guardar Cambios
        </button>
      </div>
    </div>
  )
}

export default PermissionsManagement
